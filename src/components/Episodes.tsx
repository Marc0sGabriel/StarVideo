export function Episodes() {
  return (
    <a href="#">
      <span className="text-gray-300">Terça • 22 de junho • 19h00</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium">
            Episodio Liberado
          </span>
          <span className="text-xs text-orange-500 px-2 rounded py-[0.125rem] border-2 border-orange-500 font-bold">
            Novo ✦
          </span>
        </header>

        <strong>Operaçao Strix</strong>
      </div>
    </a>
  );
}
