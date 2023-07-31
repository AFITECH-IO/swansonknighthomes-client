import * as React from "react";
import {
  BookmarkSquareIcon,
  UserPlusIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

type IncentivesSectionProps = {
  // Define component props here
};

const incentives = [
  {
    name: "Unmatched Integrity",
    icon: <UserPlusIcon className="w-10 h-10" />,
    description:
      "Trust is the foundation of our relationships. With Swanson Knight Homes, you can rely on honesty, transparency, and unwavering commitment.",
  },
  {
    name: "Personalized Approach",
    icon: <AdjustmentsVerticalIcon className="w-10 h-10" />,
    description:
      "Your goals are our priority. We take the time to understand your vision and tailor our services to exceed your expectations.",
  },
  {
    name: "Expert Guidance",
    icon: <BookmarkSquareIcon className="w-10 h-10" />,
    description:
      "Our seasoned team of real estate professionals brings extensive knowledge and expertise to help you make informed decisions in the ever-changing market.",
  },
];

export const IncentivesSection = (props: IncentivesSectionProps) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-500">
                Join us in the pursuit of finding the perfect place to call
                home. Whether you seek a cozy sanctuary, a luxury retreat, or a
                smart investment opportunity, Swanson Knight Homes is here to
                turn your real estate dreams into reality.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">{incentive.icon}</div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  {incentive.name}
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
