/*
| Developed by Starton
| Filename : FAQ.tsx
| Author : Tibo PENDINO (tibo@starton.io)
*/

import React from 'react'
import { StartonFaq } from '../common/StartonFaq'

/*
|--------------------------------------------------------------------------
| Contract
|--------------------------------------------------------------------------
*/
export interface FAQProps {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const FAQ: React.FC<FAQProps> = () => {
	// Render
	//--------------------------------------------------------------------------
	return (
		<StartonFaq
			uniqueExpand={true}
			title="Frequently asked questions"
			items={[
				{
					summary: 'What can I do with the Starton AI NFT collection project?',
					details:
						'This project allows you to deploy a NFT collection with visuals generated by DALL-E 2 in the simplest way. With two buttons, you can generate your pictures, and deploy your collection.',
					seo: {
						questionName: 'What can I do with the Starton AI NFT collection project?',
						acceptedAnswerText:
							'This project allows you to deploy a NFT collection with visuals generated by DALL-E 2 in the simplest way. With two buttons, you can generate your pictures, and deploy your collection.',
					},
				},
				{
					summary: 'What is DALL-E 2?',
					details:
						'DALL-E 2 is a neural network-based image generation system developed by OpenAI that is capable of generating high-quality images from textual descriptions. For more information, visit (https://openai.com/product/dall-e-2).',
					seo: {
						questionName: 'What is DALL-E 2?',
						acceptedAnswerText:
							'DALL-E 2 is a neural network-based image generation system developed by OpenAI that is capable of generating high-quality images from textual descriptions. For more information, visit (https://openai.com/product/dall-e-2).',
					},
				},
				{
					summary: 'Do I need to connect with my wallet?',
					details:
						"No, you don't need to connect your Metamask wallet, all is handled by the backend KMS wallet.",
					seo: {
						questionName: 'Do I need to connect with my wallet?',
						acceptedAnswerText:
							"No, you don't need to connect your Metamask wallet, all is handled by the backend KMS wallet.",
					},
				},
				{
					summary: 'Where are stored the pictures and the metadata of my NFTs?',
					details:
						'All the data and the metadata are stored in a distributed way using IPFS. This is the most secure way to be sure that your NFT is always available and cannot be corrupted, modified or unavailable.',
					seo: {
						questionName: 'Where are stored the pictures and the metadata of my NFTs?',
						acceptedAnswerText:
							'All the data and the metadata are stored in a distributed way using IPFS. This is the most secure way to be sure that your NFT is always available and cannot be corrupted, modified or unavailable.',
					},
				},
				{
					summary: 'Can I modify this Project?',
					details:
						'Obviously ! You can access the public GitHub repository at https://github.com/starton-io/XXX_TO_DO_XXX and you have a tutorial to reproduce it at https://docs.starton.io/XXX_TO_DO_XXX. You need only 3 things : a Starton API key (available at https://app.starton.io), a wallet on the Starton KMS, and an Open AI API key (available at https://platform.openai.com/account/api-keys)',
					seo: {
						questionName: 'Can I modify this Project?',
						acceptedAnswerText:
							'Obviously ! You can access the public GitHub repository at https://github.com/starton-io/XXX_TO_DO_XXX and you have a tutorial to reproduce it at https://docs.starton.io/XXX_TO_DO_XXX. You need only 3 things : a Starton API key (available at https://app.starton.io), a wallet on the Starton KMS, and an Open AI API key (available at https://platform.openai.com/account/api-keys)',
					},
				},
				{
					summary: 'What is Starton?',
					details:
						'Starton provides developers with a full set of tools to integrate WEB3 features into web applications without thinking about blockchain complexity. Please visit our website for further information (https://www.starton.io)',
					seo: {
						questionName: 'What is Starton?',
						acceptedAnswerText:
							'Starton provides developers with a full set of tools to integrate WEB3 features into web applications without thinking about blockchain complexity. Please visit our website for further information (https://www.starton.io)',
					},
				},
			]}
		/>
	)
}
