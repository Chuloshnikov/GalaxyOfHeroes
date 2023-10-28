

const fetchData = () => 
fetch('https://jsonplaceholder.typicode.com/todos/1', {
  next: { revalidate: 10 },
}).then(response => response.json())

export default async function DashboardPage() {
  const data = await fetchData()
  return (
    <div>
      {data.id}
    </div>
  )
}

