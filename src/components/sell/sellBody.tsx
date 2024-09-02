import "./sell.scss";
import SellForm from "./sellForm";
import SellHeader from "./sellHeader";

export default function SellBody() {
  return (
    <div className="sell__body">
      <SellHeader />
      <SellForm />
    </div>
  );
}
