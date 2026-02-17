 export default function Footer() {
   return (
     <footer className="bg-white shadow-md p-4 mt-auto">
       <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
            &copy; {new Date().getFullYear()} Micasa Home. All rights reserved.
          </div>
     </footer>
   )
}