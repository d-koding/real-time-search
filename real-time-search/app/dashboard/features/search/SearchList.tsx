import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

// Define the type for the photo objects
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const SearchList = async ({ query }: { query: string }) => {
  // Fetch the photos and parse the response, typed as Photo[]
  const searchItems: Photo[] = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());

  const filteredItems: Photo[] = searchItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      {/* Handle empty results */}
      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No search items found</p>
      ) : (
        <ul className="space-y-4">
          {filteredItems.map((item, index) => (
            <li key={item.id} className="flex items-center space-x-4">
              {/* Thumbnail Image */}
              <div className="relative w-[50px] h-[50px] flex-shrink-0">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
              </div>

              {/* Separator (except for the last item) */}
              {index < filteredItems.length - 1 && (
                <Separator className="my-2" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchList;