import { Star, CaretUp, CaretDown } from "@phosphor-icons/react";
import ROW_SIZE from "../../components/CryptoTable/constants";
import { useState } from "react";
import { Cryptocurrency } from "@Types/Cryptocurrency";
import { useNavigate } from "react-router-dom";

export default function TableItem(props: Cryptocurrency) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/coin/${props.id}`)}>
      <td width={ROW_SIZE.X_SMALL} style={{ justifyContent: "center" }}>
        <Star
          size={16}
          weight={(favorite && "fill") || "regular"}
          onClick={() => setFavorite(!favorite)}
        />
      </td>
      <td width={ROW_SIZE.SMALL}>{props.market_cap_rank || "-"}</td>
      <td
        width={ROW_SIZE.X_LARGE}
        style={{ justifyContent: "flex-start", gap: 10 }}
      >
        <img src={props.image} alt="Coin image" />
        <span>
          {props.name}{" "}
          <span
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: "#343a40",
            }}
          >
            {props.symbol.toUpperCase()}
          </span>
        </span>
      </td>
      <td width={ROW_SIZE.LARGE} style={{ justifyContent: "end" }}>
        {props.current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || "-"}
      </td>
      <td
        width={ROW_SIZE.MEDIUM}
        style={{
          justifyContent: "end",
          color: props.price_change_percentage_24h
            ? props.price_change_percentage_24h > 0
              ? "#02C200"
              : "#C20000"
            : undefined,
        }}
      >
        {props.price_change_24h ? (
          props.price_change_24h > 0 ? (
            <CaretUp weight="fill" size={16} />
          ) : (
            <CaretDown weight="fill" size={16} />
          )
        ) : (
          "-"
        )}
        {props.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td
        width={ROW_SIZE.LARGE}
        style={{
          justifyContent: "end",
          color: props.price_change_percentage_24h
            ? props.price_change_percentage_24h > 0
              ? "#02C200"
              : "#C20000"
            : undefined,
        }}
      >
        {props.market_cap_change_24h.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td width={ROW_SIZE.LARGE} style={{ justifyContent: "end" }}>
        {props.market_cap
          ? props.market_cap.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "-"}
      </td>
    </tr>
  );
}
