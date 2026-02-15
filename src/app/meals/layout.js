import Sidebar from "../../components/SideBar";

export default function MealsLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido dinámico según la ruta */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
