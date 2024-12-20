export default function Input({
  placeHolder,
  reference,
}: {
  placeHolder: string;
  reference: any;
}) {
  return (
    <div>
      <input
        type="text"
        ref={reference}
        placeholder={placeHolder}
        className="px-4 py-2 m-2 border rounded text-black"
      />
    </div>
  );
}
