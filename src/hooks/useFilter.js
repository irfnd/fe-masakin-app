export default function useFilter(props) {
	const { search, sort, order } = props;
	const filter = props;
	if (search === "") delete filter.search;
	if (sort === "") delete filter.sort;
	if (order === "") delete filter.order;

	return { filter };
}
