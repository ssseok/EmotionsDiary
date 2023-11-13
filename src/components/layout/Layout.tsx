import { type LayoutProps } from "../../interface/type";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full overflow-hidden  py-6 px-4 bg-[url(../public/images/bg.svg)] text-mood-gray-700">
      <div className="h-full overflow-auto mx-auto max-w-md">{children}</div>
    </div>
  );
}
