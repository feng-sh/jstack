import { cva, VariantProps } from "class-variance-authority";

// ユーザをデータベースに同期させている間に表示されるローディングスピナーです。
// cvaの素晴らしい点の一つは、Typescriptとの互換性が非常に高いことです。
const spinnerVariants = cva(
  "border-4 rounded-full border-brand-200 border-t-brand-700 animate-spin duration-700",
  {
    variants: {
      size: {
        sm: "size-4 border-2",
        md: "size-6 border-4",
        lg: "size-8 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface LoadingSpinnerProps extends VariantProps<typeof spinnerVariants >{
// <typeof spinnerVariants>を定義して、バリアントプロパティを拡張するだけで、手動で入力する必要がなくなり、すべてが自動的に行われる。
// 必要なのはオプションのclassNameだけです。
    className?: string;
}

// cvaを使用して定義したすべてのVariantがコンポーネントのプロパティとして入力される。
const LoadingSpinner = ({size, className}: LoadingSpinnerProps) => {
  return <div className="flex justify-center items-center">
    <div className={spinnerVariants({ size, className })} />
  </div>;
};

export default LoadingSpinner;
