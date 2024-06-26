import Link from "next/link";
import { bio } from "@/database/bio";
export default function Intro() {
  const title = bio.FrontPage_Title;

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center p-4"
      data-aos-duration="1000"
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ transform: "rotate(2deg)", textAlign: "center" }}
      >
        <h3>Hi, I'm {bio.Name}</h3>
        <h1>{title}</h1>
      </div>
      <p style={{ textAlign: "center" }}>
        specialized in creating bespoke websites, digital products, and visual
        stories for fast-growing companies.
      </p>
      <div
        className="d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center"
        style={{ transform: "rotate(-2deg)" }}
      >
        <Link href="/contact" className="btn-primary">
          Hire me for a project
        </Link>
        <Link href="/portfolio" className="btn-text">
          View Portfolio
          <span>
            <svg
              className="btn-icon-right"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                d="m16.707,11.174c.391.391.391,1.023,0,1.414l-2.535,2.535c-.585.584-1.421.876-2.158.876s-1.529-.32-2.086-.876l-2.636-2.636c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293v-7.367c0-.552.447-1,1-1s1,.448,1,1v7.467l2.293-2.293c.391-.391,1.023-.391,1.414,0Zm7.293-7.174v12c0,2.206-1.794,4-4,4h-2.852l-3.848,3.18c-.361.322-.824.484-1.292.484-.476,0-.955-.168-1.337-.507l-3.749-3.157h-2.923c-2.206,0-4-1.794-4-4V4C0,1.794,1.794,0,4,0h16c2.206,0,4,1.794,4,4Zm-2,0c0-1.103-.897-2-2-2H4c-1.103,0-2,.897-2,2v12c0,1.103.897,2,2,2h3.288c.235,0,.464.083.645.235l4.048,3.41,4.171-3.416c.179-.148.404-.229.637-.229h3.212c1.103,0,2-.897,2-2V4Z"
                fill="var(--light)"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
