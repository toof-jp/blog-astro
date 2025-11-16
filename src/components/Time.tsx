export default function Date({ date }: { date: string }) {
    const dateObj = new globalThis.Date(date);
    return (
        <time dateTime={dateObj.toISOString()}>
            {dateObj.toISOString().split('T')[0]}
        </time>
    );
}
