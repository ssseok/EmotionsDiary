interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="h-full overflow-hidden py-6 px-4">{children}</div>;
}
