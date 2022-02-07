import Link from "next/link";

export default function Home() {
  return (
    <Link href={{ pathname: "/search" }}>
      <div style={{ paddingTop: 30 }}>
        <h1>Search</h1>
      </div>
    </Link>
  );
}
