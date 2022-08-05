export function ButtonPublish() {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <input
          type="submit"
          className="formButtonBack hover:cursor-pointer font-bold"
          value="Pré-visualizar"
        />
        <input
          type="submit"
          className="formButtonForward hover:cursor-pointer font-bold"
          value="Publicar"
        />
      </div>
    </>
  );
}
