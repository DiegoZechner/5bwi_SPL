type Props = {
    Title: string;
}

export default function Header({Title}: Props) {
  return (
    <div className="">
      <h1 className="text-right font-bold text-3xl mr-10">{Title}</h1>
    </div>
  )
}
