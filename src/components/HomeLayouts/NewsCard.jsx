// import React, { useState } from "react";
// import { format } from "date-fns";
// import { AiFillEye } from "react-icons/ai";
// import { FaStar } from "react-icons/fa";

// const NewsCard = ({ news }) => {
//   const [showFull, setShowFull] = useState(false);
//   const { title, author, rating, total_view, thumbnail_url, details, tags, others } = news;
//   const formattedDate = format(new Date(author.published_date), "MMMM dd, yyyy");

//   return (
//     <div className="card bg-base-100 shadow-md border hover:shadow-lg transition-all">
//       <figure>
//         <img src={thumbnail_url} alt={title} className="w-full h-60 object-cover" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>

//         {/* Author Section */}
//         <div className="flex items-center gap-3 mt-2">
//           <img src={author.img} className="w-10 h-10 rounded-full" alt={author.name} />
//           <div>
//             <p className="font-medium">{author.name}</p>
//             <p className="text-sm text-gray-500">{formattedDate}</p>
//           </div>
//         </div>

//         {/* Details */}
//         <p className="text-gray-700 mt-3">
//           {showFull ? details : details.slice(0, 150) + "..."}
//           <button
//             className="text-blue-500 ml-2"
//             onClick={() => setShowFull(!showFull)}
//           >
//             {showFull ? "Show Less" : "Read More"}
//           </button>
//         </p>

//         {/* Footer Stats */}
//         <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
//           <div className="flex items-center gap-1">
//             <AiFillEye className="text-lg" />
//             <span>{total_view} views</span>
//           </div>

//           <div className="flex items-center gap-1">
//             <FaStar className="text-yellow-500" />
//             <span>{rating.number} ★</span>
//             {others?.is_trending && (
//               <span className="badge badge-warning badge-sm">{rating.badge}</span>
//             )}
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="mt-3 flex flex-wrap gap-2">
//           {tags?.map((tag, index) => (
//             <span key={index} className="badge badge-outline">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React from "react";
import { format } from "date-fns";
import { AiFillEye, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;

  const formattedDate = author?.published_date
    ? format(new Date(author.published_date), "MMMM dd, yyyy")
    : "Unknown date";

  return (
    <div className="card bg-base-100 shadow-md my-4 hover:shadow-lg hover:scale-105 transition-all w-full  p-6">
      
      {/* Top Author Section */}
      <div className="flex bg-base-200 p-2 rounded justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-sm">{author?.name || "Anonymous"}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">

        <FaRegBookmark className="text-xl text-gray-500 cursor-pointer" /> 
        <AiOutlineShareAlt className="text-xl text-gray-500 cursor-pointer" /> 
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-snug mb-3">{title}</h2>

      {/* Image */}
      <div className="w-full h-60 overflow-hidden rounded-md">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tags and Meta Info */}
      <div className="text-xs text-gray-500 mt-3">
        <span>{formattedDate}</span> |{" "}
        {tags?.map((tag, i) => (
          <span key={i} className="mr-1">
            #{tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mt-3">
        {details?.slice(0, 150)}...
        <button className="text-orange-500 ml-2 hover:underline">
          Read More
        </button>
      </p>

      {/* Footer: Stats */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600 border-t pt-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${
                index < Math.round(rating?.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1">{rating?.number}</span>
        </div>

        {/* View Count */}
        <div className="flex items-center gap-1">
          <AiFillEye className="text-lg" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
