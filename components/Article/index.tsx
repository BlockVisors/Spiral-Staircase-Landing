import Image from "next/image";
import Link from "next/link";
import componentsImg from "../../public/images/components.svg";
import babyImg from  "../../public/images/image17-380.jpeg";
import { DownArrow, RightArrow } from "@/icons";
import "./article.css";

export default function Article() {
  return (
    <main className="">
    <div className="flex flex-col items-center justify-center">
          <p className="inline-block mt-8 mb-4 px-3 py-px mb-8 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            The Experience
          </p>
         </div>
      <article className="grid lg:grid-cols-2">
         
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient mb-6">
            Auth starts here.
          </h1>
          <p className="mt-2 text-lg">
            A simple and powerful Next.js template featuring authentication and
            user management powered by Clerk.
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-gray transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              View Demo
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={babyImg} alt="EventCollage" />
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold text-transparent md:text-6xl gradient text-black dark:text-white sm:text-4xl md:text-[45px]">What We Have in Store</h2>
        <p className="mt-2">
          Connect with one of your experience coordinators to explore options at 
          The Spiral Staircase. To learn more, take our brief {" "}
          <a
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            className="font-medium text-primary-600 hover:underline"
          >
            Survey
          </a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
            <h3 className="text-lg font-medium">Elevated Childcare</h3>
            <p className="text-gray-700 dark:text-gray-700">
              Prebuilt components to handle essential functionality like user
              sign-in, sign-up, and account management.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              See Packages <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
            <h3 className="text-lg font-medium color-gradient">Events & Experiences</h3>
            <p className="text-gray-700">
              Build custom functionality by accessing auth state, user and
              session data, and more with Clerk React Hooks.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/useuser?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
             View Calendar<span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl dark:text-black/90">
            <h3 className="text-lg font-medium">Fine Wine & Dining</h3>
            <p className="text-gray-700">
              Seamlessly create and switch between organizations, invite and
              manage members, and assign custom roles.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              View Vendors<span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}