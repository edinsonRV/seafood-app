// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-6">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>© {new Date().getFullYear()} Seafood App. All rights reserved.</p>
      </div>
    </footer>
  );
}
