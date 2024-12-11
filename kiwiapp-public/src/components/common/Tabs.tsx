"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/utils/commonUtils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex border-b border-transparent", // Flexbox to align tabs horizontally
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative px-6 py-4 text-xl font-medium transition-colors", // Padding, font size, and smooth transition
      "text-gray-500 hover:text-gray-600", // Inactive tab text color
      "data-[state=active]:text-gray-800", // Active tab text color
      `data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0
      data-[state=active]:after:right-0 data-[state=active]:after:h-1 data-[state=active]:after:bg-green-500
      data-[state=active]:after:content-['']`, // Active tab underline style
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={className} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;

const TAB_SEARCH_PARAM = "tab";

export { Tabs, TabsList, TabsTrigger, TabsContent, TAB_SEARCH_PARAM };
