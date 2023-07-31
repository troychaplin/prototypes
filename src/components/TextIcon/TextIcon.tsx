import {
  DocumentTextIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Document preparation',
    description:
      'We assist you in preparing your documents for processing, which may include notarization, translation, certified true copies, and embassy requirements such as cover letters. Our expertise ensures you avoid the common document preparation mistakes that can easily cause delays of weeks or months.',
    href: '#',
    icon: DocumentTextIcon,
  },
  {
    name: 'Ship us your docs',
    description:
      'By presenting your documents in person to Global Affairs Canada and the relevant consulate or embassy in Ottawa, we save you weeks of processing time. As soon as your documents arrive at our Ottawa office, we verify that they are in order, and immediately launch document processing on your behalf.',
    href: '#',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Leave the rest to us',
    description:
      'We handle all aspects of the document authentication and legalization (also known as the apostille) process for you, rapidly returning your processed documents. We’ll keep you updated throughout the process, providing you peace of mind and certainty.',
    href: '#',
    icon: CheckCircleIcon,
  },
]

export default function TextIcon() {
  return (
    <div className="grid gap-8 md:gap-12 idc-block not-prose">
      <div className="max-w-3xl mx-0">
        <h2 className="text-2xl font-semibold text-gray-700 md:text-4xl">
          Getting started with us is easy
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl md:leading-9">
          We take the anxiety and uncertainty out of the document authentication
          & legalization process. Getting started is easy,{' '}
          <a href="#" className="font-semibold text-idc-blue">
            contact us
          </a>{' '}
          for your free consultation!
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="text-base font-semibold text-gray-900">
              <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-idc-blue">
                <feature.icon
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {feature.name}
            </dt>
            <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
              <p className="flex-auto">{feature.description}</p>
              <p className="mt-6">
                <a
                  href={feature.href}
                  className="text-sm font-semibold text-idc-blue"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
