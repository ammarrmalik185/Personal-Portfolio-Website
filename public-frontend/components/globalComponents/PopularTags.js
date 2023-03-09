import styles from '../../styles/Home.module.css'

export default function PopularTags({tags = []}) {
    return (<div className={styles.authorContainer}>
        <div>
            <p className={styles.authorHeader}>Popular Tags</p>
            <div className='w-full border border-blue mb-3'></div>
        </div>
        <div>
            {tags.map(tag => (<p className="inline-block bg-[#f3fbfb] rounded-full px-3 py-1 mr-3 mt-2">{tag}</p>))}
        </div>

    </div>);
}
