import axios from 'axios'
import { useQuery } from 'react-query'
import styles from './RecentVideos.module.scss'
import VideoItem from './VideoItem'

const RecentVideos = () => {
	const { data, isLoading } = useQuery(
		'get recent videos',
		() => axios.get('/api/youtube'),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				New videos <span>👉</span>
			</div>
			{isLoading
				? 'Загрузка...'
				: data?.length
				? data.map(video => <VideoItem key={video.videoId} item={video} />)
				: 'Пока не подгрузились!'}
		</div>
	)
}

export default RecentVideos
