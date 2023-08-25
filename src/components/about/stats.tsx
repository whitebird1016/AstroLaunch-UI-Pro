import { Typography, Card } from "@material-tailwind/react";

function StatsCard({ count, title }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="gradient"
        className="text-4xl font-bold"
        color="blue-gray"
      >
        {count}
      </Typography>
      <Typography
        variant="paragraph"
        className="my-2 font-normal !text-gray-500 lg:w-[16rem]"
      >
        {title}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "323",
    title: "Of “high-performing” level are led by a certified project manager",
  },
  {
    count: "500+",
    title: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Actively engage team members that finishes on time",
  },
  {
    count: "73",
    title: "Team members that finishes on time every project",
  },
];

export function StatsSectionFour() {
  return (
    <section className="container mx-auto grid place-items-center px-8 md:grid-cols-1 lg:grid-cols-2">
      <img
        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/iphone.png"
        alt="bg"
        className="h-full w-full max-w-md object-cover"
      />
      <div>
        <Typography variant="h2" color="blue-gray">
          Free Material Design Resources
        </Typography>
        <Typography
          variant="lead"
          className="mb-16 mt-2 w-[30rem] !text-gray-500"
        >
          We’re constantly trying to express ourselves and actualize our dreams.
        </Typography>
        <div className="grid grid-cols-2 gap-20 gap-y-8">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSectionFour;
