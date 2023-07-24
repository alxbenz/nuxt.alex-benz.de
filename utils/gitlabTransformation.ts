interface DataSource {
    [date: string]: number;
}

interface TransformedData {
    date: string;
    contributions: number;
}

export default function (dataSource: DataSource): TransformedData[] {
    const transformedData: TransformedData[] = [];

    for (const date in dataSource) {
        if (Object.prototype.hasOwnProperty.call(dataSource, date)) {
            transformedData.push({ date, contributions: dataSource[date] });
        }
    }

    return transformedData;
}
