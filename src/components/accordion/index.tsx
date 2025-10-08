import * as RadixAccordion from '@radix-ui/react-accordion';
import ChevronDownIcon from '@/assets/svg/chevron-down.svg';
import { cn } from '@/lib/utils';

const RadixAccordionItem = ({
  children,
  className,
  ref,
  ...props
}: RadixAccordion.AccordionItemProps & { ref?: React.Ref<HTMLDivElement> }) => (
  <RadixAccordion.Item
    className={cn(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b last:border-none',
      'border-b',
      '[data-state=open]:border-b-0',
      className,
    )}
    {...props}
    ref={ref}
  >
    {children}
  </RadixAccordion.Item>
);

const RadixAccordionTrigger = ({
  children,
  className,
  ref,
  ...props
}: RadixAccordion.AccordionTriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      className={cn(
        'group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 text-base text-foreground leading-none shadow-[0_1px_0]',
        'lg:px-5 lg:text-lg',
        'hover:underline',
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon
        className="text-secondary transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
);

const RadixAccordionContent = ({
  children,
  className,
  ref,
  ...props
}: RadixAccordion.AccordionContentProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <RadixAccordion.Content
    className={cn(
      'overflow-hidden text-base',
      'last:border-b-0',
      'data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown [data-state=open]:border-b',
      className,
    )}
    {...props}
    ref={ref}
  >
    <div className="px-2 py-4 lg:px-5">{children}</div>
  </RadixAccordion.Content>
);

const Accordion = {
  Root: RadixAccordion.Root,
  Item: RadixAccordionItem,
  Trigger: RadixAccordionTrigger,
  Content: RadixAccordionContent,
};

export default Accordion;
