import { mediaList } from "../../../constants/index.jsx"

const Media = () => {
  return (
    <section>
      <div className="grid grid-cols-3">
        {
          mediaList.map((media, index) =>
            <div key={index} className="h-[190px]">
              <img className="h-full object-cover cursor-pointer" src={media} />
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Media
