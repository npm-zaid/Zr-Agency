import React from 'react';
import SpotlightCard from './SpotlightCard';
const Card = () => {
  return (
  <div className='flex gap-3'>
<SpotlightCard className='w-full' spotlightColor="#64e3fa47">
 <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <ul className="text-gray-400 list-disc list-inside">
                <li>Custom responsive websites</li>
                <li>E-commerce platforms</li>
                <li>Content management systems</li>
                <li>SEO optimization</li>
              </ul>
  </SpotlightCard>


  <SpotlightCard className='w-full' spotlightColor="#64e3fa47">
 <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <ul className="text-gray-400 list-disc list-inside">
                <li>Custom responsive websites</li>
                <li>E-commerce platforms</li>
                <li>Content management systems</li>
                <li>SEO optimization</li>
              </ul>
  </SpotlightCard>

  <SpotlightCard className='w-full' spotlightColor="#64e3fa47">
 <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <ul className="text-gray-400 list-disc list-inside">
                <li>Custom responsive websites</li>
                <li>E-commerce platforms</li>
                <li>Content management systems</li>
                <li>SEO optimization</li>
              </ul>
  </SpotlightCard>

  </div>
  );
}

export default Card;
