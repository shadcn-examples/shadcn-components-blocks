"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for startups and small teams",
      monthlyPrice: "$29",
      yearlyPrice: "$290",
      features: [
        "Up to 10 team members",
        "Access to all core features",
        "Email support",
        "5GB cloud storage"
      ],
      button: {
        text: "Get Started",
        url: "https://app.yoursaas.com/signup"
      }
    },
    {
      id: "growth",
      name: "Growth",
      description: "For growing businesses needing more power",
      monthlyPrice: "$79",
      yearlyPrice: "$790",
      features: [
        "Unlimited team members",
        "Advanced analytics",
        "Priority email & chat support",
        "Unlimited cloud storage"
      ],
      button: {
        text: "Start Free Trial",
        url: "https://app.yoursaas.com/signup"
      }
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-pretty lg:text-5xl">
            Flexible Plans for Every Stage
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Whether you&#39;re just starting out or scaling fast, we’ve got a plan that fits your
            needs.
          </p>
          <div className="flex items-center gap-3 text-lg">
            Monthly
            <Switch checked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
            Yearly
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card key={plan.id} className="flex w-80 flex-col justify-between text-left">
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-2xl font-semibold">
                      {isYearly ? "/yr" : "/mo"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CircleCheck className="size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <a href={plan.button.url} target="_blank">
                      {plan.button.text}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
