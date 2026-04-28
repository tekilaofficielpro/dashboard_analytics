// 'use client'

// export default function ScrollLink({ targetId, children, className = '' }) {
//   const handleClick = () => {
//     document.getElementById(targetId)?.scrollIntoView({
//       behavior: 'smooth'
//     })
//   }

//   return (
//     <span
//       className={`cursor-pointer ${className}`}
//       onClick={handleClick}
//       role="link"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === 'Enter' && handleClick()}
//     >
//       {children}
//     </span>
//   )
// }