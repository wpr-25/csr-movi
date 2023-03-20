/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"


export default function Footer() {
  return (
    <div>
      {/*<!-- Footer-->*/}
      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <Link href="https://movi.id">
              <img class="w-auto h-7" src="https://shop.movi.id/img/logos/movi.png" loading="lazy" alt="MOVI" />
            </Link>

            <Link href="https://movizoo.id">
              <img src="https://movizoo.id/wp-content/uploads/2022/11/Movizoo_600x600-1-300x300.png" className="w-auto h-28" />
            </Link>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" className="h-6" />

                <span class="mx-1">
                  <Link href="https://www.youtube.com/@MinistryOfVapeIndonesia">
                    Youtube MOVI
                  </Link>
                </span>
              </button>

              <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <Link href="https://movi.id/id/shop/">
                  Shop Now
                </Link></button>
            </div>
          </div>

          <hr class="my-10 border-gray-200 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500">
              Â© Copyright 2023. All Rights Reserved.
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
              <Link href="https://movi.id" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                MOVI
              </Link>

              <Link href="https://psl.id" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                PSL
              </Link>

              <Link href="https://portofolio1-beta.vercel.app" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- Footer-->*/}
    </div>
  )
}