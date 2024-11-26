type Props = {
    Title: string;
}

export default function Header({Title}: Props) {
  return (
    <div className="">
      <h1 className="text-right font-bold text-5xl mr-10 font-jaro">{Title}</h1>
    </div>
  )
}
