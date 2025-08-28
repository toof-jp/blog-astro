export default function HatenaId({ id }: { id: string }) {
    const href = `https://blog.hatena.ne.jp/${id}/`;
    const imgSrc = `https://cdn.profile-image.st-hatena.com/users/${id}/profile.png`;
    return (
        <a href={href}>
            <img src={imgSrc} alt={`hatena ${id} icon`} width={16} height={16} />id:{id}
        </a>
    );
}