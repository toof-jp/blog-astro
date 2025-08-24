export default function HatenaId({ id }: { id: string }) {
    return <a href={`http://blog.hatena.ne.jp/${id}/`}><img src={`https://cdn.profile-image.st-hatena.com/users/${id}/profile.png`} alt={`${id} icon`} width={16} height={16}/>id:{id}</a>
}