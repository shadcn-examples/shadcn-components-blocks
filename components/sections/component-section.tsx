"use client";

import {
  CalendarIcon,
  CheckIcon,
  ChevronDown,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HomeIcon,
  MousePointerClickIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Area, AreaChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import componentTree from "@/config/component-tree.json";
import Link from "next/link";

const chartData = [
  { month: "January", value: 130 },
  { month: "February", value: 180 },
  { month: "March", value: 120 },
  { month: "April", value: 200 },
  { month: "May", value: 130 },
  { month: "June", value: 150 }
];

const chartConfig = {
  value: {
    label: "Desktop",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig;

export default function ComponentSection() {
  const covers = [
    {
      name: "Button",
      url: "button",
      component: (
        <div className="bg-background flex h-9 w-24 items-center justify-center rounded-md px-4 shadow/5">
          <span className="bg-muted block h-2 w-full rounded-full" />
        </div>
      )
    },
    {
      name: "Avatar",
      url: "avatar",
      component: (
        <div className="bg-background flex size-12 items-center justify-center rounded-full shadow/5">
          <UserCircleIcon className="text-muted-foreground size-5" />
        </div>
      )
    },
    {
      name: "Badge",
      url: "badge",
      component: (
        <div className="bg-background flex h-6 w-24 items-center justify-center gap-2 rounded-full shadow/5">
          <CheckIcon className="text-muted-foreground size-3" />{" "}
          <span className="bg-muted block h-2 w-1/2 rounded-full" />
        </div>
      )
    },
    {
      name: "Checkbox",
      url: "checkbox",
      component: (
        <div className="flex flex-col gap-2">
          <div className="flex h-6 w-48 items-center justify-start gap-1">
            <Checkbox className="pointer-events-none scale-70" defaultChecked={true} />
            <span className="block h-2 w-2/2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="flex h-6 w-48 items-center justify-start gap-1">
            <Checkbox className="pointer-events-none scale-70" defaultChecked={true} />
            <span className="block h-2 w-2/4 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="flex h-6 w-48 items-center justify-start gap-1">
            <Checkbox className="pointer-events-none scale-70" defaultChecked={true} />
            <span className="block h-2 w-3/4 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "Card",
      url: "card",
      component: (
        <div className="bg-background w-48 items-center space-y-3 rounded-md p-3 shadow/5">
          <span className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
          <span className="bg-muted block h-2 rounded-full" />
          <span className="bg-muted block h-2 w-10/12 rounded-full" />
          <div className="mt-4 flex h-7 w-14 items-center justify-center rounded-md bg-black/10 px-4 dark:bg-white/10">
            <span className="bg-muted block h-2 w-full rounded-full" />
          </div>
        </div>
      )
    },
    {
      name: "Accordion",
      url: "accordion",
      component: (
        <div className="bg-background w-48 items-center rounded-md shadow/5">
          <div className="flex items-center gap-2 p-3">
            <ChevronDown className="text-muted-foreground size-3" />
            <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <Separator />
          <div className="flex items-center gap-2 p-3">
            <ChevronDown className="text-muted-foreground size-3" />
            <div className="block h-2 w-10/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <Separator />
          <div className="flex items-center gap-2 p-3">
            <ChevronDown className="text-muted-foreground size-3" />
            <div className="block h-2 w-6/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "Carousel",
      url: "carousel",
      component: (
        <div className="flex items-center gap-2">
          <div className="bg-background flex size-5 items-center justify-center rounded-full shadow/5">
            <ChevronLeftIcon className="text-muted-foreground size-3 rounded-full" />
          </div>
          <div className="bg-background h-28 w-36 items-center rounded-md shadow/5" />
          <div className="bg-background flex size-5 items-center justify-center rounded-full shadow/5">
            <ChevronRightIcon className="text-muted-foreground size-3 rounded-full" />
          </div>
        </div>
      )
    },
    {
      name: "Alert Dialog",
      url: "alert-dialog",
      component: (
        <div className="bg-background w-48 items-center space-y-3 rounded-md p-3 shadow/5">
          <div className="flex justify-between">
            <span className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <XIcon className="text-muted-foreground size-3" />
          </div>
          <span className="bg-muted block h-2 rounded-full" />
          <span className="bg-muted block h-2 w-10/12 rounded-full" />
          <div className="mt-4 flex justify-end gap-2">
            <div className="bg-muted flex h-7 w-14 items-center justify-center rounded-md px-4 dark:bg-white/10">
              <span className="block h-2 w-full rounded-full bg-black/10" />
            </div>
            <div className="flex h-7 w-14 items-center justify-center rounded-md bg-black/10 px-4 dark:bg-white/10">
              <span className="bg-muted block h-2 w-full rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Breadcrumb",
      url: "breadcrumb",
      component: (
        <div className="bg-background flex w-48 items-center justify-between gap-2 rounded-md p-2 shadow/5">
          <HomeIcon className="text-muted-foreground size-3 shrink-0" />
          <span className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
          <ChevronRightIcon className="text-muted-foreground size-3 shrink-0 rounded-full" />
          <span className="block h-2 w-2/12 rounded-full bg-black/10 dark:bg-white/10" />
          <ChevronRightIcon className="text-muted-foreground size-3 shrink-0 rounded-full" />
          <span className="block h-2 w-4/12 rounded-full bg-black/10 dark:bg-white/10" />
        </div>
      )
    },
    {
      name: "Calendar",
      url: "calendar",
      component: (
        <div className="bg-background w-40 items-center space-y-3 rounded-md p-3 shadow/5">
          <div className="flex items-center justify-between">
            <ChevronLeftIcon className="text-muted-foreground size-3 rounded-full" />
            <span className="block h-2 w-3/12 rounded-full bg-black/10 dark:bg-white/10" />
            <ChevronRightIcon className="text-muted-foreground size-3 shrink-0 rounded-full" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            <span className="bg-muted block h-2 rounded-full opacity-0" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="bg-muted block h-2 rounded-full opacity-0" />
            <span className="bg-muted block h-2 rounded-full opacity-0" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
          </div>
        </div>
      )
    },
    {
      name: "Chart",
      url: "chart",
      component: (
        <div className="bg-background flex h-28 w-48 justify-center space-y-3 overflow-hidden rounded-md shadow/5">
          <ChartContainer config={chartConfig} className="mt-auto h-24 w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0
              }}>
              <Area
                dataKey="value"
                type="natural"
                fill="var(--color-value)"
                fillOpacity={0.2}
                strokeOpacity={0}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      )
    },
    {
      name: "Collapsible",
      url: "collapsible",
      component: (
        <div className="w-48 items-center">
          <div className="flex items-center justify-between gap-2 py-3">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <ChevronDown className="text-muted-foreground size-3" />
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-2 p-3">
              <div className="bg-muted block h-2 w-full rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Combobox",
      url: "combobox",
      component: (
        <div className="w-32 items-center space-y-2">
          <div className="bg-background flex items-center justify-between gap-2 rounded-md p-2 shadow/5">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <ChevronDown className="text-muted-foreground size-3" />
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Command",
      url: "command",
      component: (
        <div className="bg-background w-48 items-center rounded-md shadow/5">
          <div className="flex items-center gap-2 p-3">
            <SearchIcon className="text-muted-foreground size-3" />
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <Separator />
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Context Menu",
      url: "context-menu",
      component: (
        <div className="bg-background relative w-28 items-center rounded-md shadow/5">
          <MousePointerClickIcon className="text-muted-foreground absolute -top-3 -left-3 size-5" />
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Data Table",
      url: "data-table",
      component: (
        <div className="bg-background w-48 items-center space-y-3 rounded-md p-3 shadow/5">
          <div className="grid grid-cols-4 gap-4">
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
            <span className="bg-muted block h-2 rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <ChevronLeftIcon className="text-muted-foreground size-3 rounded-full" />
            <ChevronRightIcon className="text-muted-foreground size-3 shrink-0 rounded-full" />
          </div>
        </div>
      )
    },
    {
      name: "Date Picker",
      url: "date-picker",
      component: (
        <div className="w-32 items-center space-y-2">
          <div className="bg-background flex items-center gap-2 rounded-md p-2 shadow/5">
            <CalendarIcon className="text-muted-foreground size-3" />
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background items-center space-y-3 rounded-md p-3 shadow/5">
            <div className="flex items-center justify-between">
              <ChevronLeftIcon className="text-muted-foreground size-3 rounded-full" />
              <span className="block h-2 w-3/12 rounded-full bg-black/10 dark:bg-white/10" />
              <ChevronRightIcon className="text-muted-foreground size-3 shrink-0 rounded-full" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <span className="bg-muted block h-2 rounded-full opacity-0" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="block h-2 rounded-full bg-black/10 dark:bg-white/10" />
              <span className="bg-muted block h-2 rounded-full opacity-0" />
              <span className="bg-muted block h-2 rounded-full opacity-0" />
              <span className="bg-muted block h-2 rounded-full" />
              <span className="bg-muted block h-2 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Dialog",
      url: "dialog",
      component: (
        <div className="bg-background w-48 items-center space-y-3 rounded-md p-3 shadow/5">
          <div className="flex justify-between">
            <span className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <XIcon className="text-muted-foreground size-3" />
          </div>
          <Input className="pointer-events-none h-6 rounded-sm" />
          <div className="flex h-7 w-14 items-center justify-center rounded-md bg-black/10 px-4 dark:bg-white/10">
            <span className="bg-muted block h-2 w-full rounded-full" />
          </div>
        </div>
      )
    },
    {
      name: "Dropdown Menu",
      url: "dropdown-menu",
      component: (
        <div className="w-32 items-center space-y-2">
          <div className="bg-background inline-flex items-center justify-between gap-2 rounded-md p-2 shadow/5">
            <div className="block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Hover Card",
      url: "hover-card",
      component: (
        <div className="w-40 items-center space-y-2">
          <div className="mx-auto block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
          <div className="bg-background flex items-center gap-3 rounded-md p-3 shadow/5">
            <div className="flex size-8 items-center justify-center rounded-full bg-black/10 shadow/5 dark:bg-white/10" />
            <div className="grow space-y-2">
              <div className="block h-2 w-10/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Input",
      url: "input",
      component: (
        <div className="w-48 items-center space-y-2">
          <div className="bg-background flex items-center justify-between gap-3 rounded-md p-3 shadow/5">
            <div className="h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <XIcon className="text-muted-foreground size-3" />
          </div>
        </div>
      )
    },
    {
      name: "Input OTP",
      url: "input-otp",
      component: (
        <div className="flex w-48 items-center justify-center gap-3">
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md border shadow/10">
            <div className="h-4 w-0.5 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="size-2 rounded-full bg-black/10 opacity-0 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "navigation Menu",
      url: "navigation-menu",
      component: (
        <div className="w-48 items-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex grow items-center gap-1">
              <div className="block h-2 w-full rounded-full bg-black/10 dark:bg-white/10" />
              <ChevronDownIcon className="text-muted-foreground size-3" />
            </div>
            <div className="flex grow items-center gap-1">
              <div className="block h-2 w-full rounded-full bg-black/10 dark:bg-white/10" />
              <ChevronUpIcon className="text-muted-foreground size-3" />
            </div>
            <div className="flex grow items-center gap-1">
              <div className="block h-2 w-full rounded-full bg-black/10 dark:bg-white/10" />
              <ChevronUpIcon className="text-muted-foreground size-3" />
            </div>
          </div>
          <div className="bg-background w-28 items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="block h-2 w-7/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Pagination",
      url: "pagination",
      component: (
        <div className="flex w-48 items-center justify-center gap-3">
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <ChevronLeftIcon className="text-muted-foreground size-4" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <ChevronRightIcon className="text-muted-foreground size-4" />
          </div>
        </div>
      )
    },
    {
      name: "Popover",
      url: "popover",
      component: (
        <div className="w-32 items-center space-y-2 text-center">
          <div className="bg-background inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
            <div className="block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Progress",
      url: "progress",
      component: (
        <div className="w-48 items-center space-y-2 text-center">
          <Progress value={40} />
        </div>
      )
    },
    {
      name: "Radio Group",
      url: "radio-group",
      component: (
        <div className="flex flex-col gap-2">
          <RadioGroup defaultValue="comfortable" className="pointer-events-none">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <div className="block h-2 w-30 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <div className="block h-2 w-24 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <div className="block h-2 w-30 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </RadioGroup>
        </div>
      )
    },
    {
      name: "Select",
      url: "select",
      component: (
        <div className="w-32 items-center space-y-2">
          <div className="bg-background flex items-center justify-between gap-2 rounded-md p-2 shadow/5">
            <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <ChevronUpIcon className="text-muted-foreground size-3" />
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
              <div className="flex items-center justify-between gap-1">
                <div className="bg-muted h-2 w-7/12 rounded-full" />
                <CheckIcon className="size-2" />
              </div>
              <div className="flex items-center justify-between gap-1">
                <div className="bg-muted h-2 w-10/12 rounded-full" />
                <CheckIcon className="size-2" />
              </div>
              <div className="bg-muted block h-2 w-7/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Sheet",
      url: "sheet",
      component: (
        <div className="bg-background ms-auto flex h-full w-30 flex-col space-y-3 self-end p-3 shadow/5">
          <div className="flex items-center justify-between">
            <span className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
            <XIcon className="text-muted-foreground size-3" />
          </div>
          <div className="bg-muted h-2 w-10/12 rounded-full" />
          <div className="bg-muted h-2 w-5/12 rounded-full" />
          <div className="bg-muted h-2 w-10/12 rounded-full" />
          <div className="bg-muted mt-auto h-2 w-full rounded-full" />
        </div>
      )
    },
    {
      name: "Sidebar",
      url: "sidebar",
      component: (
        <div className="bg-background me-auto flex h-full w-30 flex-col space-y-3 self-start p-3 shadow/5">
          <div className="flex items-center justify-between">
            <span className="block h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-1">
              <div className="bg-muted h-2 w-4/12 rounded-full" />
              <ChevronDownIcon className="size-3" />
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="bg-muted h-2 w-7/12 rounded-full" />
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="bg-muted h-2 w-5/12 rounded-full" />
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="bg-muted h-2 w-6/12 rounded-full" />
              <ChevronDownIcon className="size-3" />
            </div>
          </div>
          <div className="mt-auto h-2 w-4 rounded-full bg-black/10 dark:bg-white/10" />
        </div>
      )
    },
    {
      name: "Slider",
      url: "slider",
      component: (
        <div className="w-48 items-center space-y-2 text-center">
          <Slider
            defaultValue={[45]}
            className="pointer-events-none **:data-[slot=slider-track]:bg-black/10 dark:**:data-[slot=slider-track]:bg-white/10"
          />
        </div>
      )
    },
    {
      name: "Skeleton",
      url: "skeleton",
      component: (
        <div className="w-40 items-center space-y-2">
          <div className="bg-background flex items-center gap-3 rounded-md p-3 shadow/5">
            <div className="flex size-8 items-center justify-center rounded-full bg-linear-to-r from-black/10 to-black/0 shadow/5" />
            <div className="grow space-y-2">
              <div className="block h-2 w-10/12 rounded-full bg-linear-to-r from-black/10 to-black/0" />
              <div className="block h-2 w-7/12 rounded-full bg-linear-to-r from-black/10 to-black/0" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Switch",
      url: "switch",
      component: (
        <div className="w-40 text-center">
          <Switch className="pointer-events-none scale-120" />
        </div>
      )
    },
    {
      name: "Tabs",
      url: "tabs",
      component: (
        <div className="w-48 items-center space-y-2 text-center">
          <div className="flex gap-2">
            <div className="inline-flex items-center justify-center gap-2 rounded-md bg-black/10 p-2 shadow/5 dark:bg-white/10">
              <div className="block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
            <div className="bg-background inline-flex items-center justify-center gap-2 rounded-md p-2 shadow/5">
              <div className="block h-2 w-8 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
          <div className="bg-background items-center rounded-md shadow/5">
            <div className="flex flex-col gap-3 p-3">
              <div className="block h-2 w-5/12 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="bg-muted block h-2 w-10/12 rounded-full" />
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Toggle Group",
      url: "toggle-group",
      component: (
        <div className="flex w-48 items-center justify-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-md bg-black/10 dark:bg-white/10">
            <div className="h-2 w-5 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="h-2 w-5 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <div className="bg-background flex size-9 items-center justify-center rounded-md shadow/5">
            <div className="h-2 w-5 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      )
    },
    {
      name: "Tooltip",
      url: "tooltip",
      component: (
        <div className="w-48 items-center space-y-2 text-center">
          <Tooltip open={true}>
            <TooltipTrigger asChild>
              <div className="bg-background inline-flex items-center justify-center gap-2 rounded-md p-3 shadow/5">
                <div className="block h-2 w-10 rounded-full bg-black/10 dark:bg-white/10" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="z-40 my-1 h-2 w-20 rounded-full bg-white/50" />
            </TooltipContent>
          </Tooltip>
        </div>
      )
    }
  ];

  const filteredComponents = componentTree.filter((e) => e.type === "component");
  const componentsCount = filteredComponents.reduce((acc, item) => {
    acc += item.components.length;
    return acc;
  }, 0);

  return (
    <div className="container mx-auto max-w-7xl space-y-4 px-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Components</h3>
        <div className="text-muted-foreground">Total {componentsCount} components</div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredComponents.map((item, i) => {
          const cover = covers.find((c) => c.url === item.url);
          if (!cover) return null;
          return (
            <Link href={`/${item.url}`} key={i} className="group space-y-3">
              <div className="bg-muted hover:bg- flex aspect-3/2 items-center justify-center overflow-hidden rounded-md border group-hover:border-gray-300">
                {cover.component}
              </div>
              <div className="flex flex-col items-center justify-center gap-1 text-sm">
                {cover.name}
                <span className="text-muted-foreground text-xs">
                  {item.components.length} component{item.components.length > 1 ? "s" : ""}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
