'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { useCallback, useEffect, useRef, useState } from 'react';
import ChevronLeft from '@/assets/svg/chevron-left.svg';
import ChevronRight from '@/assets/svg/chevron-right.svg';
import { cn } from '@/lib/utils';

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const TabsRoot = ({
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  ...props
}: TabsProps) => (
  <Tabs.Root
    className={cn('w-full', className)}
    defaultValue={defaultValue}
    value={value}
    onValueChange={onValueChange}
    {...props}
  >
    {children}
  </Tabs.Root>
);

const TabsList = ({
  children,
  className,
  containerProps,
  ...props
}: TabsListProps & { containerProps?: React.HTMLProps<HTMLDivElement> }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeTabPosition, setActiveTabPosition] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const checkScrollability = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);

      const isAtEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) <= 1;
      setCanScrollRight(!isAtEnd);
    }
  }, []);

  const updateActiveTabPosition = useCallback(() => {
    if (tabsListRef.current) {
      const activeTab = tabsListRef.current.querySelector(
        '[data-state="active"]',
      ) as HTMLElement;
      if (activeTab) {
        const tabsListRect = tabsListRef.current.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();

        setActiveTabPosition({
          left: activeTabRect.left - tabsListRect.left,
          width: activeTabRect.width,
        });
      }
    }
  }, []);

  const scrollToShowTab = useCallback((tabElement: HTMLElement) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();

      // Calcula as posições relativas ao container
      const tabLeft = tabRect.left - containerRect.left + container.scrollLeft;
      const tabRight = tabLeft + tabRect.width;
      const containerWidth = container.clientWidth;
      const currentScrollLeft = container.scrollLeft;

      let newScrollPosition = currentScrollLeft;

      // Se a tab está cortada à esquerda
      if (tabLeft < currentScrollLeft) {
        newScrollPosition = tabLeft - 8; // 8px de margem
      }
      // Se a tab está cortada à direita
      else if (tabRight > currentScrollLeft + containerWidth) {
        newScrollPosition = tabRight - containerWidth + 8; // 8px de margem
      }

      // Só rola se precisar
      if (newScrollPosition !== currentScrollLeft) {
        container.scrollTo({
          left: Math.max(0, newScrollPosition),
          behavior: 'smooth',
        });
      }
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    updateActiveTabPosition();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      const resizeObserver = new ResizeObserver(() => {
        checkScrollability();
        updateActiveTabPosition();
      });
      resizeObserver.observe(container);

      // Adiciona listener para cliques nas tabs
      const handleTabClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const tabTrigger = target.closest('[role="tab"]') as HTMLElement;

        if (tabTrigger) {
          // Pequeno delay para permitir que o estado da tab seja atualizado primeiro
          setTimeout(() => {
            scrollToShowTab(tabTrigger);
            updateActiveTabPosition();
          }, 50);
        }
      };

      container.addEventListener('click', handleTabClick);

      // Observer para mudanças no DOM (quando tab ativa muda)
      const mutationObserver = new MutationObserver(() => {
        updateActiveTabPosition();
      });

      if (tabsListRef.current) {
        mutationObserver.observe(tabsListRef.current, {
          attributes: true,
          attributeFilter: ['data-state'],
          subtree: true,
        });
      }

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        container.removeEventListener('click', handleTabClick);
        resizeObserver.disconnect();
        mutationObserver.disconnect();
      };
    }
  }, [checkScrollability, scrollToShowTab, updateActiveTabPosition]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tabsList = container.querySelector('[role="tablist"]');

      if (tabsList) {
        const tabs = Array.from(tabsList.children) as HTMLElement[];
        const containerWidth = container.clientWidth;
        const currentScrollLeft = container.scrollLeft;

        // Encontra a primeira tab completamente visível atual
        let firstVisibleIndex = 0;
        let accumulatedWidth = 0;

        for (let i = 0; i < tabs.length; i++) {
          const tabWidth = tabs[i].offsetWidth + 8; // 8px é o gap
          if (accumulatedWidth + tabWidth > currentScrollLeft) {
            firstVisibleIndex = i;
            break;
          }
          accumulatedWidth += tabWidth;
        }

        // Calcula quantas tabs cabem completamente na tela
        let visibleTabsCount = 0;
        let totalWidth = 0;

        for (let i = firstVisibleIndex; i < tabs.length; i++) {
          const tabWidth = tabs[i].offsetWidth + 8;
          if (totalWidth + tabWidth <= containerWidth) {
            totalWidth += tabWidth;
            visibleTabsCount++;
          } else {
            break;
          }
        }

        // Volta uma "página" de tabs
        const startIndex = Math.max(0, firstVisibleIndex - visibleTabsCount);
        let scrollToPosition = 0;

        for (let i = 0; i < startIndex; i++) {
          scrollToPosition += tabs[i].offsetWidth + 8;
        }

        container.scrollTo({
          left: scrollToPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tabsList = container.querySelector('[role="tablist"]');

      if (tabsList) {
        const tabs = Array.from(tabsList.children) as HTMLElement[];
        const containerWidth = container.clientWidth;
        const currentScrollLeft = container.scrollLeft;

        // Encontra a primeira tab completamente visível atual
        let firstVisibleIndex = 0;
        let accumulatedWidth = 0;

        for (let i = 0; i < tabs.length; i++) {
          const tabWidth = tabs[i].offsetWidth + 8; // 8px é o gap
          if (accumulatedWidth + tabWidth > currentScrollLeft) {
            firstVisibleIndex = i;
            break;
          }
          accumulatedWidth += tabWidth;
        }

        // Calcula quantas tabs cabem completamente na tela
        let visibleTabsCount = 0;
        let totalWidth = 0;

        for (let i = firstVisibleIndex; i < tabs.length; i++) {
          const tabWidth = tabs[i].offsetWidth + 8;
          if (totalWidth + tabWidth <= containerWidth) {
            totalWidth += tabWidth;
            visibleTabsCount++;
          } else {
            break;
          }
        }

        // Avança uma "página" de tabs
        const startIndex = Math.min(
          tabs.length - 1,
          firstVisibleIndex + visibleTabsCount,
        );
        let scrollToPosition = 0;

        for (let i = 0; i < startIndex; i++) {
          scrollToPosition += tabs[i].offsetWidth + 8;
        }

        container.scrollTo({
          left: scrollToPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div
      {...containerProps}
      className={cn(
        'flex items-center rounded-lg bg-secondary/10',
        containerProps?.className,
      )}
    >
      {/* Left Arrow */}
      <button
        type="button"
        onClick={scrollLeft}
        className={cn(
          'flex items-center justify-center rounded-lg p-2 transition-all duration-200',
          canScrollLeft
            ? 'cursor-pointer hover:bg-secondary/20'
            : 'pointer-events-none',
        )}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        <ChevronLeft
          className={cn(
            'size-full text-foreground',
            !canScrollLeft && 'opacity-20',
          )}
        />
      </button>

      {/* Tabs Container */}
      <div
        ref={scrollContainerRef}
        className={cn(
          'flex-1 overflow-x-auto',
          'hidden-scrollbar scroll-smooth',
          className,
        )}
      >
        <div ref={tabsListRef} className="relative">
          {activeTabPosition && (
            <div
              className="absolute top-1 rounded-lg bg-primary transition-all duration-300 ease-out"
              style={{
                left: activeTabPosition.left,
                width: activeTabPosition.width,
                height: 'calc(100% - 8px)',
                transform: 'translateZ(0)',
              }}
            />
          )}
          <Tabs.List className="relative flex min-w-max gap-2 p-1" {...props}>
            {children}
          </Tabs.List>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={scrollRight}
        className={cn(
          'flex items-center justify-center rounded-lg p-2 transition-all duration-200',
          canScrollRight
            ? 'cursor-pointer hover:bg-secondary/20'
            : 'pointer-events-none',
        )}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        <ChevronRight
          className={cn(
            'size-full text-foreground',
            !canScrollRight && 'opacity-20',
          )}
        />
      </button>
    </div>
  );
};

const TabsTrigger = ({
  children,
  value,
  className,
  ...props
}: TabsTriggerProps) => (
  <Tabs.Trigger
    className={cn(
      'relative z-10 whitespace-nowrap rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200',
      'text-foreground/70 hover:bg-secondary/20 hover:text-foreground',
      'data-[state=active]:text-primary-contrast data-[state=active]:hover:bg-transparent',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      className,
    )}
    value={value}
    {...props}
  >
    {children}
  </Tabs.Trigger>
);

const TabsContent = ({
  children,
  value,
  className,
  ...props
}: TabsContentProps) => (
  <Tabs.Content
    className={cn(
      'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      className,
    )}
    value={value}
    {...props}
  >
    {children}
  </Tabs.Content>
);

const TabsComponent = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

export default TabsComponent;
