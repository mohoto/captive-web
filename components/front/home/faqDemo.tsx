"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import * as React from "react";

// Utility function for class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Button component
const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Badge component
const badgeVariants = {
  default: "border-transparent bg-primary hover:bg-primary/80",
  secondary: "border-transparent bg-secondary",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

// FAQ Item interface
interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

// FAQ Section Props
interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  items?: FaqItem[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
    onContact?: () => void;
  };
}

// Individual FAQ Item Component
const FaqItemComponent = React.forwardRef<
  HTMLDivElement,
  {
    item: FaqItem;
    index: number;
  }
>(({ item, index }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "group rounded-xl border border-border/60 transition-all duration-200",
        "bg-card shadow-sm",
        isOpen
          ? "bg-gradient-to-br from-background via-muted/50 to-background"
          : "hover:bg-muted/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent text-left"
      >
        <div className="flex flex-col gap-2 flex-1">
          {item.category && (
            <Badge variant="secondary" className="w-fit text-xs font-normal">
              {item.category}
            </Badge>
          )}
          {/* <h3
            className={cn(
              "text-base font-medium transition-colors duration-200",
              isOpen ? "text-foreground" : "text-foreground/80"
            )}
          >
            {item.question}
          </h3> */}
          <h3
            className={cn(
              "text-base font-medium transition-colors duration-200"
            )}
          >
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0 ml-4",
            "transition-colors duration-200"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border/60">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-sm leading-relaxed"
              >
                {item.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItemComponent.displayName = "FaqItemComponent";

// Main FAQ Section Component
const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  (
    {
      className,
      title = "Questions fréquentes de nos client sur la création de sites web",
      description = "Find answers to common questions about our services",
      items = [
        {
          question: "What makes your platform unique?",
          answer:
            "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
          category: "Platform",
        },
        {
          question: "How does the pricing structure work?",
          answer:
            "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
          category: "Pricing",
        },
        {
          question: "What kind of support do you offer?",
          answer:
            "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
          category: "Support",
        },
        {
          question: "How secure is my data?",
          answer:
            "We take security seriously with enterprise-grade encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR. Your data is protected with multiple layers of security.",
          category: "Security",
        },
        {
          question: "Can I integrate with existing tools?",
          answer:
            "Yes! We offer extensive integration capabilities with popular tools and platforms. Our API allows for custom integrations, and we have pre-built connectors for major business applications.",
          category: "Integration",
        },
      ],
      contactInfo = {
        title: "Still have questions?",
        description: "We're here to help you get the answers you need",
        buttonText: "Contact Support",
        onContact: () => console.log("Contact support clicked"),
      },
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full bg-gradient-to-b from-transparent via-muted/30 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 rounded-full bg-captive-primary mb-4">
              <HelpCircle className="h-6 w-6 text-captive-secondary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg max-w-2xl mx-auto">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {items.map((item, index) => (
              <FaqItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Demo component
function FaqDemo() {
  return <FaqSection />;
}

export default FaqDemo;
