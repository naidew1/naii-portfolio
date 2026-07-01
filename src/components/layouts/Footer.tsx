export default function Footer() {
  return (
    <footer className="mx-auto mt-6 flex w-full justify-center text-center">
      <p className="text-center text-sm text-typography-dark">
        © {new Date().getFullYear()} naii. All rights reserved.
      </p>
    </footer>
  );
}
