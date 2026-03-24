import Sidebar from "../../components/SideBar";

export default function RecipesLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full rounded-3xl bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-4 text-white">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido dinámico según la ruta */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
