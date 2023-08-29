import { BsSend } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Button({ btnStyle }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={btnStyle.btn}
      disabled={pending}
      style={
        pending
          ? {
              cursor: "not-allowed",
            }
          : null
      }
    >
      <span>send</span>
      {pending ? <BiLoaderAlt className={btnStyle.loading} /> : <BsSend />}
    </button>
  );
}
