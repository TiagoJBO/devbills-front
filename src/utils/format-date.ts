import dayjs from 'dayjs';
import customParseFotmat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFotmat);

export function formatDate(date: string): string {
 return dayjs(date, 'DD/MM/YYYY').format('yyyy/MM/DD');
}
