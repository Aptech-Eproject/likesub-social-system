type QueueItem = {
    resolve: (value?: unknown) => void;
    reject: (error: unknown) => void;
};

class TokenRefreshQueue {
    private isRefreshing = false;
    private queue: QueueItem[] = [];

    get refreshing() {
        return this.isRefreshing;
    }

    get queueSize() {
        return this.queue.length;
    }

    startRefresh() {
        this.isRefreshing = true;
    }

    endRefresh() {
        this.isRefreshing = false;
    }

    enqueue(item: QueueItem) {
        this.queue.push(item);
    }

    processQueue(error?: unknown) {
        this.queue.forEach(item =>
            error ? item.reject(error) : item.resolve()
        );
        this.clear();
    }

    clear() {
        this.queue = [];
    }
}

export const tokenRefreshQueue = new TokenRefreshQueue();