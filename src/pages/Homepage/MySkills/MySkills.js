// import { useQuery } from "@tanstack/react-query"
import React from "react"
import SkillCard from "../../../components/Cards/SkillCard"
import SectionTitle from "../../../components/Typography/SectionTitle"
import SectionHead from "../../../components/Typography/SectionHead"

const MySkills = () => {
  //   const { data: skills = [] } = useQuery({
  //     queryKey: ["skills"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         "https://portfolio-backend-sepia-seven.vercel.app/skills"
  //       )
  //       const data = await res.json()
  //       console.log("data: ", data)
  //       return data
  //     },
  //   })

  const skills = [
    {
      _id: "639e0fba72b5829b8d47eb17",
      setsName: "Frontend Technologies",
      skillSet: [
        {
          id: 1,
          name: "HTML5",
          icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
          id: 2,
          name: "CSS3",
          icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        // {
        //   id: "7",
        //   name: "TypeScript",
        //   icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        // },
        {
          id: 4,
          name: "Bootstrap",
          icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          id: 5,
          name: "Tailwind CSS",
          icon: "https://i.postimg.cc/Jhn5zv5k/pngwing-com.png",
        },
        {
          id: 6,
          name: "React JS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          id: 7,
          name: "Next JS",
          icon: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
        },
        {
          id: 8,
          name: "Redux",
          icon: "https://img.icons8.com/color/48/redux.png",
        },
        {
          id: 9,
          name: "Shadcn UI",
          icon: "data:image/webp;base64,UklGRooBAABXRUJQVlA4IH4BAADwCgCdASo4ADgAPjEOjEYiEREKACADBLSABkFfz/ygT0DUSfxm0WbmBir2YJ6J9gD9Kf97+YfwZ+oD9qvYz/WtZkSJCBFGT17aHGMJA4Dld0ZjyIR7XyPgE7694/7mjAAA/v9gGQP5NPzT/+UkqTlJ7wMMwzMqP//srNiXxcVV5i7w5XOQPQOEASXw62r7iPxZQxYFl/6Gb5XL/zXKTK3mhUlxcLiFUvyW/P9m+sqkeY+sa3wNnlQ19w2Gvt4GA/Mi6Jg8MbktOEm9Q+9NqSChjb7DB3X56rhfCvtChS7zEvexqf51L/dfWo7+T3ldxZ7pfxV6r7xCe/MuHCIFR5cvcL/ruc9eOfJMYI6NNnJJly7JeDf+2pQzv6QPhcwb5EcMfgpNM2wk4eecRMqHZlQ239D8nkXztu5ZBYUqxaRO/6Yp3CvVMl1QyXSiJAZ1n+jb/mz2R8p6aQCVxOENuNHKA6AKtRXMyWobTWAMto60MRaqjsyNZh75glgAAAAA",
        },
        {
          id: 10,
          name: "Aceternity UI",
          icon: "data:image/webp;base64,UklGRiIEAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSGsBAAARkGRt25kxb223q7GNBWhmjWwbe9ASOrVtLMF2m/d5nkG+5E/erxpGxARYZbeBI/dffCOmJaqaaby9dmxUX+u4z+Kr3xTww9UFfTqY/kBhH8yt033bNwX+vrWq63Eq9ulUl92u6BsT4z8rPGeZWZf7yvCOmS1iDlpgA24oyxs2/ksexZgjynTPjVwuPM/ljXL1bJDN/1KQedDdkQOFTFBmBijcATAenWA5RUkMUrg7UVUmI9B/FYUDDlSQMeTuDrgzXJJ0KkkCbbAWKVFASiSoGGWKdUHGKYNSCohE/nJRrTfAEooEQ0n66USJkMSm0AiUJtViQyAhkR4tSRKteHMiBbZQvG6GVOtvzzdTyTbO7Gyl1e2jv+dRTBp8M4/rZvOYxQKzrtdzeNrdzCZ8ivdrkplZ153x1liy9ykGO2mV3fd+i/RpdZcqs9HPwvDpDKs/YvktRvh0eeEA63zC9mvfhGYgCP76wo6xVhMAVlA4IJACAADwEACdASo4ADgAPjEQjEYiEREJACADBLOAaZDG/4DSCuAUzvyBeFtsApAD0AOknrEH4ucjXkvns2gAfxD+m/ir+W+Ym/rH5X3K+c//j/+X5NfoT/Y/2L4Av5D/R/85/XP3Q41X9pEJw/PfAXpijKXjzl9Z+TdeWfTVtCewDzaZSgPEtKOv4s0kBiAodG0UigAA/v/+fJCxdopNt5pJ/4kXGruWN0GNZ4Qx4rufHQxwuSn0g8J1hr/35P/8Ierz6aGrBnP++/hYBcUkRAZviGgN1Ysd+O/fDxw7z16ynnwf8FUymf8EVKv3/FINGw+4UFEF7Ab7hWYU5wMrgnRSunvZ961nQGY69r30O132pOv/9JR8a/+eGcNlLxcDulnDG3CDH64KHZt8Uvd6kArIC1tSvZtsMO/AAITHUQkR6Jc6U+r5eggvTxB77lrjgbZkEngdBGhx5ckMzfc1iUb2D5eYIGUgqWBsja8klnJVjlziZw80hAWWUyZCQFEgqfhkJjoSdzwKK6dxF3dhr8du9xxtt0+KUJOLM/bnvJ5S9e/X5qxfPuMUdTT0qrWjV9Zd2q99zwpZvYdBIP1B39wYyoHK5j4wit83/tq2WV+nPIIReY6OGxK4OlnrADPKuyj/U8bdkMp/FXwkh0YD16dlXAviAfaTFzXm6jmFEuf3XQNNZdw2TL3iTod4t1t/8V1FzXpZMD/GNHMtQ9cmyKLo+qnOCCqbnA1rCmjy/BMIwRwKPWy55JaEfb9BnIUglIU+r/1J+fdDbDARrM52NB1g7gcgQpVqTM5eBuljIchkymliPfYq3RykGnVJpaWvjAnFXkXb5Qyy4uAN+K/D5+Ehb+SpSQu77b/g5MVFl3OJvIgAAA==",
        },
      ],
    },
    {
      _id: "639e0fba72b5829b8d47eb18",
      setsName: "Backend Technologies",
      skillSet: [
        {
          id: 1,
          name: "Node JS",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
        },
        {
          id: 2,
          name: "Express",
          icon: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
        },
        {
          id: 3,
          name: "RESTful API",
          icon: "https://img.icons8.com/plasticine/100/api-settings.png",
        },
        {
          id: 4,
          name: "Firebase",
          icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
        },
        {
          id: 5,
          name: "JWT Auth",
          icon: "https://media-exp1.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us",
        },
      ],
    },
    {
      _id: "639e0fba72b5829b8d47eb1a",
      setsName: "Database's",
      skillSet: [
        {
          id: 1,
          name: "Mongo DB",
          icon: "https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png",
        },
        {
          id: 2,
          name: "PostgreSQL",
          icon: "https://img.icons8.com/color/48/postgreesql.png",
        },
        {
          id: 3,
          name: "MySQL",
          icon: "https://img.icons8.com/color/48/my-sql.png",
        },
      ],
    },
    {
      _id: "639e0fba72b5829b8d47eb17",
      setsName: "Programming Language's",
      skillSet: [
        {
          id: 1,
          name: "JavaScript",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
          id: 2,
          name: "Python",
          icon: "https://img.icons8.com/color/48/python--v1.png",
        },
        // {
        //   id: 3,
        //   name: "C",
        //   icon: "https://img.icons8.com/color/48/c-programming.png",
        // },
      ],
    },
    {
      _id: "639e0fba72b5829b8d47eb19",
      setsName: "Other Skill's",
      skillSet: [
        // {
        //   id: 1,
        //   name: "GitHub",
        //   icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Git-icon-white.svg/1200px-Git-icon-white.svg.png",
        // },
        {
          id: 2,
          name: "Figma",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        },
        // {
        //   id: 3,
        //   name: "JEST",
        //   icon: "https://img.icons8.com/parakeet/48/test-passed.png",
        // },
        {
          id: 4,
          name: "Docker",
          icon: "https://img.icons8.com/color/48/docker.png",
        },
        {
          id: 5,
          name: "AWS",
          icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
        },
        {
          id: 5,
          name: "PM2",
          icon: "data:image/webp;base64,UklGRpAFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSBwDAAARmV2I6H+oyKu2bcu2ZfuHu7u7k9zdXZq7DIEmhsFJ7u4y0dytubu7ux3HZZAgLdiJXQNAh0hd24ZDJHr3ra3IFXGIJNcTqQ6D4O7nANA8PloiJmACWslZwFvTqc61rm0nK7SKrJdA9TCYk2TgglyN4+zvmpLsy1j607G2+AQYDITroCRLRKnTAiLaQO1oG1ndbo4BdGdWo+lQm5AFICAjI6PEABZYJQLLAvJEdx5mTbO4BhjYYvokc7oXFiMYyBqAcc2hZwAuU8PcOALhdvWOwmx6VWh8NU6pfjxY4V/Pvq8mMKVqHA6wi0I7JjOF+5trQdRhCDCWASILBlkCjKWkph/3tZJtFaqdePj9jlxbqYLAgCAFpEAYECGoZJASWD/6eBxkCzs4XAF4p6VKGZZRIkFSHhYWtkxpgCscqsKZh+1551KqdcgCsh4yCCxZBsuAKq489L867vjXALrVvh9dkMHIAmSRkBQFphgZGRW38PJDa9vK/wK49vdpdaeWomgQYIAAbAIHZCQgIIWwqj/+b3dLW8gRgM6sZjCiCU1DBZYFlsfx8JaAm1f2LU2pBgFCgKB7NwP8a0X9apKm9SeFrjz7ehU3LACXBRgQGJFBIisVe9tP4doJTO/mSzMaYJkoc6GBKaer+nEnq9pDIf///ig+rRkCCzAEWAYiAxIQkAQZSQCVaN7LWt4+UgEu71JzkkE9MyhaplRgEAasEFDJIxziMs4kzE7d4RYsy8hCqk8kWIBljNOWnL7W1aPs6Z+S7MWw+tehWgSARL0NBllGWIASIgO3cO0zG7jymn+Au2YwnsubkSMhsCyHAQdFE0BCwSDAkRXFrxfO62ng22U8L9PIYcKEg0QJshIBlqv6ZBg3LgcYwzw+puj6qaSpq3d1C2Acs/uj5AyYtZcL/VjAYITriDIDgYUrBAaRsqwEWSRKKpfsqtCB3yd0ZUvNOMBEwYYIijYNlYzIWsaXq9haodq1cwfXkeYKWZGdBhlEMaMqyg0mwCIk+8drj7GxK24qQO3T36rIEGQkxRKnhVGhboNluVL95LFnOCs4VlA4IE4CAADQEACdASpAAEAAPjEOjEYiEREJgCADBLYAZOCAGup87/BrhAuzv7AZQJw7/YPtN9939AzlX1AfwD+Af4D+5e8zzgHWAegB5Pv7D/An+0H6zezt//7rh+HJs19Ar+h9QD0AP1mTvFDwonibUsK6p8JkGBXqRiNynJdipqKD0SWgNbsq8w4Eet//14EhxEWqZAD+//6vwH2SIK6X0mT1veVTGkv3mzc/jSFAn4gyMh+vmzERsIXqUcUaDm65EBqQi0dXvh+S/hdsdtQ+lfAwGeIws7gQYH/ww0rjUKgNmQUQwwiigQ0YTp6+AVLnVFDA/8c3aaEd+lYHhgZl2g3yZa8ZBrDhJAMMrnOKRr/bwXMUSRE3C2xfeJdkFAThCjixljAAZktQA3p47Pm/yztBarrwxVGtk3yB6WIw6G1ZdQkmwBFxGVQPnhhTZGEHdqmSD3pWIz5oQVDub7u1QB/2o0/X/4dv5Bs43AAcixh3/HY85w9hGFx9SbDE9OzUBNJHBKDDX5uUW+gT4J1XAL8ayhJ50VuSjT+efzHM485rVBqlRMgX3gP+Ie+96Cn0khxLKvBxyAz5x9urh6HdUwUk03B4N1hfSitwkGJapEheycO4xwGkglHAIjzhWPZ9ieKjfO6hW41n+zw/+ysoFrvsL8OHSsDwwNCILksg+AcOqp4UkGQkbYL2l8s/3Ic9KClqcdk6kgCZU4LB0vFxq/i+ebqbQQrsnuji5LO4ucWDaSNGKzhiS2lQJGEpZ33O6gg2bEI7n/UWXs6UrLW2uAAAAA==",
        },
        {
          id: 5,
          name: "Nginx",
          icon: "data:image/webp;base64,UklGRvYEAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSDoCAAARkERreyFNqXZpbNu2be9t282xbdv2zMq2bdvt/quSRTLdqa/O7CNiAhB3sez6J4831XEg6GqvuxFMYjc7uiBZxEId9kQJIQTj8J42WQQoWcq23vAiRP4ZfLujrg2EUrbK6HNRQmOKEO3O2BK5ZcPERv69X3SS6pcjcxqJxljy9dp6Xycc8Zt9Q7JZDMjWas3LYIRw1YJv1jRWeSnVhp2IEwPxpZ7FRC7pex1/+IcYGv1wqqMtJUeuFpufhXVidNqXnU0zCEk5m2x7+gcTiKE3O2sn4So5+kYME6jasyGKjWFtcuQrJpD/7KxnoaTREQJ9mJXKMFEDN8PFmKCDm6RQ6cdo4NwSw6uDG6tS6ngNnDsdw2+WdH4dnCcDpQY0cG6G4tPhZaTkgFlEHzxvJsrlh+fOzPDB82ZheOF5WB54/swM9//Dm4ExzixOE/hUymWCgEI5TDBRYrjNYvdicAGRsrrhTWZYJsKbLlG2mfAWqpRrWAJaaGB6ylb7WAQU/rSwuoMSbHm998NQMPl7dWguyUIhhGwNd30IYQA6jj5c39yFkhUyN1rzPGwQJvjvi1X1cskoVanThZdBY7SXx7uLiKdYdsBFDfPTw0e7VFAQ5wx1drwPRrlg/Pv+kibZEXdByNzrwCvMQ7+3uV9Oh8CPrrPo0OdUMPl5cEEDZLitQKXhVyLJpV0fXCiH0ziEshVruumDnsTbvfUQVIeSpeYhzEocrpnVDoZ29nxC3eovI/A5ln37sbAg4g9WUDgglgIAAPANAJ0BKjgAOAA+MQyMRiIREQqAIAMEtQBXKoAczBZDwH4k86zyl245gOyudB4m3TN8gD+yekt1AH9k/xnXHegB0oH7X+jM78yscfRAntU7FvPjzynL9gDisBn6MKA0Dt4E6Yqr+pnrStzLUxxWfHMMs5AzL9fTgAD+8I16ChxVpWxtPt8nZizDmp+adlKMZqgQcnNVQNIrDTEd/8UHzYSYFqNfhiewGLbubUPbvTuukSFJWKurZbhiXYfMEdMGgLBCmeYPtIrrgh1KoLrvVtfQnmsG8AgiX9BhPyyf1LQu8/NbmG4Otzjec8KWv2q6mMPx6MnIUn+IwribRStTivA45BYmMVFEId0VhhlZVW+gDGgf+AidRSVkYzI+aXbvSJ/iBHqb7oVl3uyL8X3/sIx1GrVP8ccdMRX5neDQbFCYRRnu4HL7ieB+4q7lNW8rA7W/RI3SCfblHaVXn3fTesC0w2rbveGaDfqlrhe8EUz/fRgAqenmPW9v4NdMvun4uo6iSBbH+eZSqlmIPgYgOfXj5b+1fWnTvKBxN/QV1aKuxENsAMXaIzpNw/owKQTW1vjzt/Cq1f5xmiMpswBAXAwiRty2zKvRzL6+DRN1RAbu8Fk7Hv/Blt0M2mvvpv898zxhm73KoSePouji/h/QgyX5rWdnnle3X6jcjbKihBId3We12q3nfzWC9gmxtLUHMJ2DPpqFsumJPnsKAndqfrrpT65xZ6HGi9oCuTFUsSWjaVkRO6GyozMPq9OKPlTlgKqTvgk4rpxdMUtEBes3/jf9sVlMcVG3XPVtqVIqWzplgLLaiN3urphMN041nXXvPiHrIGTFSDckuNAw2Kg6gjgWEq3r4/9riYc6Ylfo49vTwjoAAAAA",
        },
        // {
        //   id: 6,
        //   name: "Linux",
        //   icon: "https://img.icons8.com/color/48/linux--v1.png",
        // },
        // {
        //   id: 3,
        //   name: "Netlify",
        //   icon: "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png",
        // },
        // {
        //   id: 7,
        //   name: "Vercel",
        //   icon: "https://www.starhealth.in/favicon.ico",
        // },
        {
          id: 8,
          name: "Illustrator",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png",
        },
      ],
    },
  ]

  const props = {
    img: "https://cdn.lordicon.com/svbmmyue.json",
    text: "My Skills",
  }

  return (
    <section id="skills" className="mb-32">
      <SectionTitle props={props} />
      <SectionHead>
        My <span className="text-primary">Technology Stack</span>
      </SectionHead>
      <div className="grid grid-cols-1 gap-20">
        {skills.map((sets, index) => (
          <SkillCard key={index} index={index} sets={sets} />
        ))}
      </div>
    </section>
  )
}

export default MySkills
