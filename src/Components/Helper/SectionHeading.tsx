import { ChildrenType } from '@/Types/Types'

const SectionHeading = ({ children }: ChildrenType) => {
  return (
    <h1 className="bg-indigo-800 w-fit text-center px-4 py-3 mx-auto text-white font-bold text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h1>
  )
}

export default SectionHeading
