import type { CacheClass } from 'memory-cache';
import { ICacheAdaptor } from '@juadz/core';
export default function useMemoryCacheAdaptor(memoryCacheInstance?: CacheClass<string, unknown> | null): ICacheAdaptor;
