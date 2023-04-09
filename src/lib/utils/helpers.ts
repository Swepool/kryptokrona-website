import numbro from 'numbro';
export const fetchNode = async (node1: string, node2?: string): Promise<NodeData> => {
	if (node1) {
		const responseNode1 = await fetch(node1);
		if (responseNode1.ok) return await responseNode1.json();
	}

	if (node2) {
		const responseNode2 = await fetch(node1);
		if (responseNode2.ok) return await responseNode2.json();
	}

	throw new Error("Couldn't fetch node data");
};

export const fetchSupply = async (url: string): Promise<SuplyData> => {
	const res = await fetch(url);
	if (res.ok) return await res.json();
	throw new Error("Couldn't fetch supply");
};

export function numberWithCommas(x: string | number): string {
	x = x.toString();
	const pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
	return x;
}

export function prettifyHashrate(value, decimal) {
	var kilo = 1000,
		mega = 1000000,
		giga = 1000000000,
		tera = 1000000000000;

	if (value < kilo) return String(value.toFixed(decimal) + ' H/s');
	if (value >= kilo && value <= mega) return (value / kilo).toFixed(decimal) + ' KH/s';
	if (value >= mega && value <= giga) return (value / mega).toFixed(decimal) + ' MH/s';
	if (value >= giga && value <= tera) return (value / giga).toFixed(decimal) + ' GH/s';
	else return (value / tera).toFixed(decimal) + ' TH/s';
}

export function localizeNumber(number: string) {
	const numberFormatter = new Intl.NumberFormat('en-US'); // US formatting, force commas.
	return numberFormatter.format(number);
}
export function getReadableDifficultyString(difficulty:number, precision: number) {
	if (isNaN(parseFloat(String(difficulty))) || !isFinite(difficulty)) return 0;
	if (typeof precision === 'undefined') precision = 0;
	const units = ['', 'k', 'M', 'G', 'T', 'P'],
		number = Math.floor(Math.log(difficulty) / Math.log(1000));
	if (units[number] === undefined || units[number] === null) {
		return 0;
	}
	return (
		localizeNumber((difficulty / Math.pow(1000, Math.floor(number))).toFixed(precision)) +
		' ' +
		units[number]
	);
}
