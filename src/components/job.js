import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, language }) => {
  const millionLabel = language.startsWith("es")
    ? offer.salary === 1
      ? " millón"
      : " millones"
    : " million";

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>
        <FormattedMessage id={offer.name} defaultMessage={offer.name} />
      </td>
      <td>{offer.company}</td>
      <td>
        <FormattedNumber
          value={offer.salary}
          style="decimal"
          maximumFractionDigits={1}
        />
        {millionLabel}
      </td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={Number(offer.views)} />
      </td>
    </tr>
  );
};

export default Job;
