import { Star, CaretUp } from '@phosphor-icons/react';
import ROW_SIZE from '../constants';

export default function TableItem() {
  return (
    <tr>
      <td width={ROW_SIZE.X_SMALL} style={{ justifyContent: 'center' }}>
        <Star size={16} />
      </td>
      <td width={ROW_SIZE.SMALL}>1</td>
      <td
        width={ROW_SIZE.X_LARGE}
        style={{ justifyContent: 'flex-start', gap: 10 }}
      >
        <img
          src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
          alt=""
        />
        <span>
          Bitcoin{' '}
          <span
            style={{
              fontWeight: 400,
              fontSize: 12,
              color: '#343a40',
            }}
          >
            BTC
          </span>
        </span>
      </td>
      <td width={ROW_SIZE.LARGE} style={{ justifyContent: 'end' }}>
        $76,624.26
      </td>
      <td width={ROW_SIZE.MEDIUM} style={{ justifyContent: 'end' }}>
        <CaretUp weight="fill" size={16} />
        0.7%
      </td>
      <td width={ROW_SIZE.LARGE} style={{ justifyContent: 'end' }}>
        $60,134,538,095
      </td>
      <td width={ROW_SIZE.LARGE} style={{ justifyContent: 'end' }}>
        $1,515,601,694,368
      </td>
    </tr>
  );
}
