export default function CTASection({ phone, title }) {
  return (
    <div className="relative before:content-[''] before:absolute before:w-full before:h-full md:before:h-1/2 before:left-0 before:top-0 before:bg-accent before:z-0 overflow-hidden">
      <div className="pt-12 relative space-y-12 bg-no-repeat bg-top nbswo-bg">
        <h2 className="text-white max-w-[80%] mx-auto">{title}</h2>

        <div className="flex md-down:flex-col justify-center md:space-x-4 md-down:space-y-4">
          <a href={`tel:${phone}`} className="btn md-down:mx-auto bg-white">
            Request a demo
          </a>
          <a href={`tel:${phone}`} className="btn md-down:mx-auto bg-white">
            or call 020&nbsp;893&nbsp;2732
          </a>
        </div>

        <picture className="block">
          <source srcSet={`/images/nbswo.webp 2x, /images/nbswo.webp 1x`} />
          <img src="/images/nbswo.png" width="1070" height="856" alt="would you like to get acquainted with Nation Business Suite without obligation" className="w-full max-w-[80%] mx-auto object-cover" />
        </picture>
      </div>
    </div>
  );
}
