import { Layout } from "./Layout";

export function Container({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <Layout>
      <div className={`m-auto max-w-xl ${classNames}`}>{children}</div>
    </Layout>
  );
}
